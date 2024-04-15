CREATE PROCEDURE [dbo].[GetUserSettings]
	@RoleID uniqueidentifier
AS
BEGIN
	-- First we need to get the UserID from the RoleID
	DECLARE @UserID uniqueidentifier
	IF EXISTS(SELECT UserID FROM dbo.Student WHERE StudentID = @RoleID)
	BEGIN
		SET @UserID = (SELECT UserID FROM dbo.Student WHERE StudentID = @RoleID)
	END
	ELSE
	BEGIN
		SET @UserID = (SELECT UserID FROM dbo.Mentor WHERE MentorID = @RoleID)
	END

	-- Safety net just in case there is no UserImage for some reason
	IF NOT EXISTS(SELECT [URL] FROM dbo.UserImage WHERE UserID = @UserID)
	BEGIN
		EXEC UpsertUserImage @UserID = @UserID, @ImageURL = ''
	END
	ELSE

	SELECT u.UserID, FirstName, LastName, Email, [URL] 
	FROM dbo.[User] AS u 
		JOIN dbo.[UserImage] AS ui ON u.UserID = ui.UserID
	WHERE u.UserID = @UserID
END
