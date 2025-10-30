import mysql.connector

from controllers.Classes import MoodData

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

def shipIt(data: MoodData):
    connection = _getConnection()
    cursor = connection.cursor()

    cursor.execute("INSERT INTO Moods VALUES (%s, %s, %s, %s, %s, %s, %s)", (data.Date, data.Mood1, data.Mood2, data.Mood3, data.Mood4, data.Mood5, data.Headlines))

    connection.commit()

    print("Moods inserted successfully")

