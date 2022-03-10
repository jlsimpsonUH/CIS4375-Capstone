# Import the necessary modules
import flask
from flask import jsonify
from flask import request
from flask.helpers import make_response
import json
import requests

#mysql
import mysql.connector
from mysql.connector import Error , connect

#setting up application name
app = flask.Flask(__name__)
app.config["DEBUG"] = True

def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection
# executing query and commiting 
# def to call on to make sure the connection to the API
# works and runs the sql query and commits the change to 
# the datebase
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")

#reading query
#def to call on to read information 
#without commiting or changing the information 
def execute_read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as e:
        print(f"The error '{e}' occurred")
        

# connection information  
connection = create_connection("localhost","root","rootroot","cis-4375")


#endpoint targetting
@app.route('/', methods = ['GET']) # This will be the Home/Index Page 
def home():
    return "<h1> CIS 4375 Warrent managment!</h1>"

app.run()