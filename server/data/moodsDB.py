import mysql.connector

from controllers._classes import MoodData

config = {
    "host": "10.0.0.77",
    "user": "Poltergheist",
    "password": "AlterGheist",
    "database": "AlterGheist",
    "port": 3306
}

def _getConnection():
    return mysql.connector.connect(**config)

def dateExists(date):
    mydb = _getConnection()
    mycursor = mydb.cursor()
    mycursor.execute("select * from Moods where moodDate = '%s'" % date)

    date = mycursor.fetchone()

    mydb.close()
    mycursor.close()

    if date:
        return date[0]
    else:
        return -1

def shipIt(data: MoodData, Summary:str):
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute(
        "INSERT INTO Moods (moodDate, Mood1, Mood2, Mood3, Mood4, Mood5, Headlines, Summary) "
        "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
        (data.Date, data.Mood1, data.Mood2, data.Mood3, data.Mood4, data.Mood5, data.Headlines, Summary)
    )

    ID = cursor.lastrowid

    connection.commit()

    connection.close()
    cursor.close()

    return (ID)


def getMoodFromId(id):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Moods WHERE MoodID = '%s'" % id)
    moods = cursor.fetchone()
    connection.close()
    cursor.close()
    return moods

def getMoodFromDate(date):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM Moods WHERE moodDate = '%s'" % date)
    moods = cursor.fetchone()
    connection.close()
    cursor.close()
    return moods

def getHeadlines(id):
    connection = _getConnection()
    cursor = connection.cursor()
    cursor.execute("SELECT Headlines FROM Moods WHERE moodID = %s", (id,))
    headlines = cursor.fetchone()
    connection.close()
    cursor.close()
    return headlines[0].split("|")

