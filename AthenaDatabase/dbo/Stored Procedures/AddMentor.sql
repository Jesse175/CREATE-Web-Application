CREATE PROCEDURE [dbo].[AddMentor]
	@UserID uniqueidentifier
AS
BEGIN
	DECLARE @MentorID uniqueidentifier = NEWID()
	INSERT INTO dbo.[Mentor] 
	(UserID, MentorID, JobTitle, [Availability]) 
	VALUES(@UserID, @MentorID, '', '')

	-- Now return the mentor we just inserted
	EXEC GetMentor @MentorID = @MentorID; 
END
