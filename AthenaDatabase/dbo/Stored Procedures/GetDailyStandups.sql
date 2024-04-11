CREATE PROCEDURE [dbo].[GetDailyStandups]
	@StudentID UNIQUEIDENTIFIER
AS
BEGIN
	SELECT ds.StandupID, ds.[StudentID], ds.[UserID], [DateCreated], [Description]
	FROM dbo.[DailyStandup] AS ds
	WHERE StudentID = @StudentID
	ORDER BY DateCreated
END