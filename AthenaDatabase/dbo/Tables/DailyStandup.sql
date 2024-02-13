CREATE TABLE [dbo].[DailyStandup]
(
	[StandupID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [DateCreated] DATETIME NOT NULL, 
    [Description] NVARCHAR(MAX) NULL
)
