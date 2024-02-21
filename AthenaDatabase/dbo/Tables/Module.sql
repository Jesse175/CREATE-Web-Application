﻿CREATE TABLE [dbo].[Module]
(
	[ModuleID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(256) NOT NULL, 
    [Color] NVARCHAR(6) NOT NULL, 
    [Description] NVARCHAR(MAX) NULL
)