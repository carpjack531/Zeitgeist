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


