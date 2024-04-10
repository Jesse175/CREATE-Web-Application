CREATE PROCEDURE [dbo].[GetMentors]
AS
BEGIN
	SELECT MentorID, JobTitle, [Availability], FirstName, LastName, Email
	FROM dbo.[Mentor] AS mt
	JOIN dbo.[User] AS u ON u.UserID = mt.UserID
	ORDER BY LastName
END