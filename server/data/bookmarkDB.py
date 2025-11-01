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

def addBookmark(user: str, mood: str):
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute("INSERT INTO Bookmarks VALUES (%s, %s)", (user, mood))
    connection.commit()
    connection.close()
    cursor.close()

def deleteBookmark(user: str, mood: str):
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute("DELETE FROM Bookmarks WHERE UserID = %s AND MoodsID = %s", (user, mood))
    connection.commit()
    connection.close()
    cursor.close()

def getBookmark(user: str, mood: str):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Bookmarks WHERE UserID = %s AND MoodsID = %s", (user, mood))
    result = cursor.fetchone()
    connection.close()
    cursor.close()
    return result

def getAllBookmarks(user: str):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Bookmarks WHERE UserID = %s", (user,))
    result = cursor.fetchall()
    connection.close()
    cursor.close()
    return result
