import bcrypt
import mysql.connector

config = {
    "host": "10.0.0.77",
    "user": "Poltergheist",
    "password": "AlterGheist",
    "database": "AlterGheist",
    "port": 3306
}

def _getConnection():
    return mysql.connector.connect(**config)

def registerUser(username, password, emailAddress, notifications, dateOfBirth):
    connection = _getConnection()
    cursor = connection.cursor()
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    cursor.execute("INSERT INTO Users (Username, Password, emailAddress, notifications, dateOfBirth) VALUES (%s, %s, %s, %s, %s)",
                   (username, hashed.decode('utf-8'), emailAddress, notifications, dateOfBirth))
    connection.commit()
    print("User Registered")

def deleteUser(username):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("DELETE FROM Users WHERE Username = %s", (username,))
    userDeleted = False
    if cursor.rowcount > 0:
        userDeleted = True
    connection.commit()
    connection.close()
    cursor.close()
    return userDeleted


#We could try to add cookies but that might be overcomplicating stuff
def loginUser(username, password):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Users WHERE emailAddress = %s", (username,))
    result = cursor.fetchone()
    connection.close()
    cursor.close()

    if result:
        storedPassword = result[5].encode('utf-8')
        if bcrypt.checkpw(password.encode('utf-8'), storedPassword):
            return {"status": "success", "username": username, "userID": result[0]}
        else:
            return {"status": "failed", "message": "Password doesn't match"}
    else:
        return {"status": "failed", "message": "User doesn't exist"}

def getAllUsers():
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM Users")
    result = cursor.fetchall()
    connection.close()
    cursor.close()
    return result

def getUser(username):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Users WHERE Username = %s", (username,))
    result = cursor.fetchone()
    connection.close()
    cursor.close()
    return result

def updateUser(oldUserID, name, password, emailAddress, notifications, dateOfBirth):
    connection = _getConnection()
    cursor = connection.cursor()
    updates = []
    if name is not None:
        updates.append(f"Username = '{name}'")
    if password is not None:
        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        updates.append(f"Password = '{hashed.decode('utf-8')}'")
    if emailAddress is not None:
        updates.append(f"emailAddress = '{emailAddress}'")
    if notifications is not None:
        if notifications:
            updates.append(f"notifications = '1'")
        else:
            updates.append(f"notifications = '0'")
    if dateOfBirth is not None:
        print(dateOfBirth)
        updates.append(f"dateOfBirth = '{dateOfBirth}'")

    cursor.execute(f"UPDATE Users SET {', '.join(updates)} WHERE userId = %s", (oldUserID, ))
    connection.commit()
    connection.close()
    cursor.close()



def userExists(id):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Users WHERE userId = %s", (id,))
    result = cursor.fetchone()
    connection.close()
    cursor.close()
    return result is not None