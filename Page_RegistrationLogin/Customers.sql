CREATE DATABASE Customers;

CREATE TABLE Users(
    account_holder_first_name VARCHAR(50) NOT NULL,
    account_holder_last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    book_id VARCHAR(50),
    account_holder_city VARCHAR(50)NOT NULL,
    account_holder_email VARCHAR(255)NOT NULL,
    pass_word VARCHAR (30) NOT NULL,
    year_of_birth INT NOT NULL,
    PRIMARY KEY (user_name)
);

INSERT INTO Users(account_holder_first_name, account_holder_last_name,user_name,
 book_id, account_holder_email, account_holder_city, pass_word, year_of_birth)
 VALUES
    ('Emma', 'Smith', 'esmith92','','emmajohnson.smith@email.com', 'Birmingham', 'b1lly3!l!5h', 1990),
    ('Lucas', 'Anderson', 'lucaaaaaas', '', 'lucas.anderson@email.com', 'Leeds', 'M!d5umM3r', 1991),
    ('Olivia', 'Taylor', 'livvytay21', '', 'olivia.brown.taylor@email.com', 'Manchester', 'M@nn1eg!rL', 1992),
    ('Agnieszka', 'Thiel', 'aginsideout','', 'a.thiel@email.com', 'Glasgow', '0404789', 1993),
    ('Hanan', 'Bayiga', 'Hanana', '', 'Hananbayiga@email.com', 'Manchester', 'by3by3b!rd13', 1994),
    ('Jodie', 'Coleman', 'jodiebear', '', 'colemanj@email.com', 'London', 'w!nt3rDr3@m', 1995),
    ('Jasmine', 'Allen', 'nellaj', '', 'jallen@email.com', 'London', 'l0nD0n!23', 1996),
    ('Amun', 'Omar','amunnnnn','', 'amun.omar@email.com', 'Bristol', 'sUnfl0w3rs4d@yz', 1997),
    ('Caitlyn', 'Larnyoh', 'caitlynnnnn', '', 'caitlyn.larnyoh@email.com', 'Basingstoke', '@l13ngrL!', 1998),
    ('Isabella', 'Miller', 'izzymiller','','jellybelly45@email.com ','Edinburgh', '3ddi3m!ill3r65', 1999);