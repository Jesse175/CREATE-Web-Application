CREATE TABLE [dbo].[DailyStandup] (
    [StandupID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [UserID] UNIQUEIDENTIFIER NOT NULL,
    [DateCreated] DATETIME NOT NULL, 
    [Description] NVARCHAR(MAX) NULL,
    FOREIGN KEY ([UserID]) REFERENCES [dbo].[User] ([UserID])
);
