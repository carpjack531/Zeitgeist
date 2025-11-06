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

def registerUser(username, password):
    connection = _getConnection()
    cursor = connection.cursor()
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    cursor.execute("INSERT INTO Users (Username, Password) VALUES (%s, %s)",
                   (username, hashed.decode('utf-8')))
    connection.commit()
    print("User Registered")

def deleteUser(username):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("DELETE FROM Users WHERE Username = %s", (username,))
    connection.commit()
    connection.close()
    cursor.close()

#We could try to add cookies but that might be overcomplicating stuff
def loginUser(username, password):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Users WHERE Username = %s", (username,))
    result = cursor.fetchone()
    connection.close()
    cursor.close()

    if result:
        storedPassword = result[2].encode('utf-8')
        if bcrypt.checkpw(password.encode('utf-8'), storedPassword):
            return {"status": "success", "username": username}
        else:
            return {"status": "failed", "message": "Password doesn't match"}
    else:
        return {"status": "failed", "message": "Username doesn't exist"}

def getAllUsers():
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM Users")
    result = cursor.fetchall()
    connection.close()
    cursor.close()
    return result
