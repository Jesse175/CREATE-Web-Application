﻿CREATE TABLE [dbo].[User]
(
	[UserID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [FirstName] NVARCHAR(100) NOT NULL, 
    [LastName] NVARCHAR(100) NOT NULL, 
    [Email] NVARCHAR(100) NOT NULL, 
    [Password] NVARCHAR(100) NOT NULL
)
