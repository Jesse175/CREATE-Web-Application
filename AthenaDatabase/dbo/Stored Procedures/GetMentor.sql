CREATE PROCEDURE [dbo].[GetMentor]
	@MentorID uniqueidentifier
AS
BEGIN
	SELECT MentorID, [Availability], JobTitle, FirstName, LastName, Email
	FROM dbo.[Mentor] AS m
	JOIN dbo.[User] AS u ON u.UserID = m.UserID
	WHERE MentorID = @MentorID
END
