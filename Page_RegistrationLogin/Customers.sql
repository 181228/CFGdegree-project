CREATE DATABASE Customers;

CREATE TABLE Users(
    account_holder_first_name VARCHAR(50) NOT NULL,
    account_holder_last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    book_id VARCHAR(50),
    account_holder_city VARCHAR(50)NOT NULL,
    account_holder_email VARCHAR(255)NOT NULL,
    PRIMARY KEY (user_name)
);

INSERT INTO Users(account_holder_first_name, account_holder_last_name,user_name,
 book_id, account_holder_email, account_holder_city)
 VALUES
    ('Emma', 'Smith', 'esmith92','','emmajohnson.smith@email.com', 'Birmingham'),
    ('Lucas', 'Anderson', 'lucaaaaaas', '', 'lucas.anderson@email.com', 'Leeds'),
    ('Olivia', 'Taylor', 'livvytay21', '', 'olivia.brown.taylor@email.com', 'Manchester'),
    ('Agnieszka', 'Thiel', 'aginsideout','', 'a.thiel@email.com', 'Glasgow'),
    ('Hanan', 'Bayiga', 'Hanana', '', 'Hananbayiga@email.com', 'Manchester'),
    ('Jodie', 'Coleman', 'jodiebear', '', 'colemanj@email.com', 'London'),
    ('Jasmine', 'Allen', 'nellaj', '', 'jallen@email.com', 'London'),
    ('Amun', 'Omar','amunnnnn','', 'amun.omar@email.com', 'Bristol'),
    ('Caitlyn', 'Larnyoh', 'caitlynnnnn', '', 'caitlyn.larnyoh@email.com', 'Basingstoke'),
    ('Isabella', 'Miller', 'izzymiller','','jellybelly45@email.com ','Edinburgh');

