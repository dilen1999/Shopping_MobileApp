

--USE master;
--ALTER DATABASE ShoppingDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
--DROP DATABASE ShoppingDB;

-- Create the database
--CREATE DATABASE ShoppingDB;
--GO

-- Use the newly created database
USE ShoppingAppDb;
GO

-- Customer Table
CREATE TABLE Customer (
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    ProfilePicture NVARCHAR(255),
    Role NVARCHAR(50) CHECK (Role IN ('Customer', 'Admin')),
    PaymentId INT UNIQUE,  
    AddressId INT UNIQUE,
    IsDeleted BIT DEFAULT 0  -- Soft delete
);
GO

-- Admin Table (Derived from Customer Table using Role)
CREATE TABLE Admin (
    AdminId INT PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    ProfilePicture NVARCHAR(255),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (AdminId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);
GO

-- Product Table
CREATE TABLE Product (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(255) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    Description NVARCHAR(MAX),
    Image NVARCHAR(255),
    Rating FLOAT DEFAULT 0,
    AddedBy INT,  
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (AddedBy) REFERENCES Admin(AdminId) ON DELETE SET NULL
);
GO

-- Review Table
CREATE TABLE Review (
    ReviewId INT IDENTITY(1,1) PRIMARY KEY,
    ProductId INT NOT NULL,
    CustomerId INT NOT NULL,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    Comments NVARCHAR(MAX),
    ReviewDate DATETIME DEFAULT GETDATE(),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId) ON DELETE CASCADE,
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);
GO

-- Cart Table
CREATE TABLE Cart (
    CartId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT CHECK (Quantity > 0),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE,
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId) ON DELETE CASCADE
);
GO

-- Order Table
CREATE TABLE [Order] (
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    TotalAmount DECIMAL(10,2) NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) CHECK (Status IN ('Pending', 'Completed', 'Cancelled')),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);
GO

-- OrderDetails Table
CREATE TABLE OrderDetails (
    OrderDetailsId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT CHECK (Quantity > 0),
    Price DECIMAL(10,2) NOT NULL,
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (OrderId) REFERENCES [Order](OrderId) ON DELETE CASCADE,
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId) ON DELETE CASCADE
);
GO

-- Payment Table
CREATE TABLE Payment (
    PaymentId INT IDENTITY(1,1) PRIMARY KEY,
    CardType NVARCHAR(50),
    CardNumber VARBINARY(256),  
    CVV VARBINARY(256),         
    ExpiryDate DATE NOT NULL,
    IsDeleted BIT DEFAULT 0  -- Soft delete
);
GO

-- Address Table
CREATE TABLE Address (
    AddressId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    FullName NVARCHAR(255) NOT NULL,
    Address NVARCHAR(255) NOT NULL,
    City NVARCHAR(100) NOT NULL,
    State NVARCHAR(100),
    Country NVARCHAR(100),
    PostalCode NVARCHAR(20),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);
GO

-- Notification Table
CREATE TABLE Notification (
    NotificationId INT IDENTITY(1,1) PRIMARY KEY,
    CustomerId INT NOT NULL,
    OrderId INT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    Status NVARCHAR(10) CHECK (Status IN ('Read', 'Unread')),
    Timestamp DATETIME DEFAULT GETDATE(),
    IsDeleted BIT DEFAULT 0,  -- Soft delete
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE,
    FOREIGN KEY (OrderId) REFERENCES [Order](OrderId) ON DELETE NO ACTION  
);
GO


---- Use the ShoppingDB database
--USE ShoppingDB;
--GO

-- Insert Sample Data into Customer Table
INSERT INTO Customer (Name, Email, Password, ProfilePicture, Role, PaymentId, AddressId, IsDeleted) 
VALUES 
('John Doe', 'john@example.com', 'hashedpassword123', 'john.png', 'Customer', 1, 1, 0),
('Jane Smith', 'jane@example.com', 'hashedpassword456', 'jane.png', 'Admin', 2, 2, 0);


select * from Customer
-- Insert data into Admin table (Admins are derived from Customers)
INSERT INTO Admin (AdminId, Name, Email, Password, ProfilePicture)
VALUES 
(1, 'Jane Smith', 'jane@example.com', 'hashedpassword456', 'jane.png');
GO

select * from Admin

-- Insert data into Product table
INSERT INTO Product (Name, Price, Description, Image, Rating, AddedBy, IsDeleted) 
VALUES 
('Laptop', 1200.99, 'High-performance laptop', 'laptop.png', 4.5, 1, 0),
('Smartphone', 799.50, 'Latest model smartphone', 'smartphone.png', 4.2, 1, 0),
('Headphones', 199.99, 'Noise-canceling headphones', 'headphones.png', 4.7, 1, 0);
GO

select * from Product

-- Insert data into Review table
INSERT INTO Review (ProductId, CustomerId, Rating, Comments, ReviewDate, IsDeleted)
VALUES 
(8, 1, 5, 'Great laptop!', GETDATE(), 0),
(9, 1, 4, 'Good smartphone, but battery life could be better.', GETDATE(), 0),
(9,2, 5, 'Amazing sound quality!', GETDATE(), 0);
GO

select * from Review

-- Insert data into Cart table
INSERT INTO Cart (CustomerId, ProductId, Quantity, IsDeleted)
VALUES 
(1, 8, 1, 0),
(2, 9, 2, 0),
(2, 9, 1, 0);
GO

select * from Cart

-- Insert data into Order table
INSERT INTO [Order] (CustomerId, TotalAmount, OrderDate, Status, IsDeleted)
VALUES 
(1, 1200.99, GETDATE(), 'Pending', 0),
(2, 1599.00, GETDATE(), 'Completed', 0);
GO

select * from [Order]

-- Insert data into OrderDetails table
INSERT INTO OrderDetails (OrderId, ProductId, Quantity, Price, IsDeleted)
VALUES 
(1, 8, 1, 1200.99, 0),
(2, 9, 2, 799.50, 0);
GO

select * from OrderDetails

-- Insert data into Payment table
INSERT INTO Payment (CardType, CardNumber, CVV, ExpiryDate, IsDeleted)
VALUES 
('Visa', ENCRYPTBYPASSPHRASE('SecretKey', '411111111111'), ENCRYPTBYPASSPHRASE('SecretKey', '123'), '2026-05-01', 0),
('MasterCard', ENCRYPTBYPASSPHRASE('SecretKey', '55000000004'), ENCRYPTBYPASSPHRASE('SecretKey', '456'), '2027-08-15', 0),
('Amex', ENCRYPTBYPASSPHRASE('SecretKey', '340000000009'), ENCRYPTBYPASSPHRASE('SecretKey', '789'), '2025-12-30', 0);
GO

select * from Payment



-- Insert data into Address table
INSERT INTO Address (CustomerId, FullName, Address, City, State, Country, PostalCode, IsDeleted)
VALUES 
(1, 'John Doe', '123 Main St', 'New York', 'NY', 'USA', '10001', 0),
(1, 'Alice Johnson', '456 Elm St', 'Los Angeles', 'CA', 'USA', '90001', 0),
(2, 'Bob Brown', '789 Oak St', 'Chicago', 'IL', 'USA', '60601', 0);
GO

select * from Address

-- Insert data into Notification table
INSERT INTO Notification (CustomerId, OrderId, Message, Status, Timestamp, IsDeleted)
VALUES 
(1, 1, 'Your order has been placed successfully!', 'Unread', GETDATE(), 0),
(2, 2, 'Your order has been shipped!', 'Read', GETDATE(), 0),
(1, NULL, 'New promotional offer available!', 'Unread', GETDATE(), 0);
GO

select * from Notification