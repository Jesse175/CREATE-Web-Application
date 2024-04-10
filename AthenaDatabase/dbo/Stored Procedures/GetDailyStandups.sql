CREATE PROCEDURE [dbo].[GetDailyStandups]
AS
BEGIN
	SELECT StandupID, [DateCreated], [Description]
	FROM dbo.[DailyStandup]
END