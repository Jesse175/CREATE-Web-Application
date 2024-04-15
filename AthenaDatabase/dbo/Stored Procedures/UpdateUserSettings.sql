CREATE PROCEDURE [dbo].[UpdateUserSettings]
	@RoleID uniqueidentifier,
	@FirstName nvarchar(100),
	@LastName nvarchar(100),
	@Email nvarchar(100),
	@Password nvarchar(100) = NULL,
	@ImageURL nvarchar(200)
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

	IF (@Password = NULL)
	BEGIN
		UPDATE dbo.[User]
		SET FirstName = @FirstName,
			LastName = @LastName,
			Email = @Email
		WHERE UserID = @UserID
	END
	ELSE
	BEGIN
		UPDATE dbo.[User]
		SET FirstName = @FirstName,
			LastName = @LastName,
			Email = @Email,
			[Password] = @Password
		WHERE UserID = @UserID
	END

	EXEC UpsertUserImage @UserID = @UserID, @ImageURL = @ImageURL
END
