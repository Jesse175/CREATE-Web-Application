CREATE PROCEDURE [dbo].[GetDailyStandups]
AS
BEGIN
	SELECT StandupID, UserID, [DateCreated], [Description]
	FROM dbo.[DailyStandup]
END