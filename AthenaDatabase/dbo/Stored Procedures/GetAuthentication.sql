CREATE PROCEDURE [dbo].[GetAuthentication]
	@TokenID uniqueidentifier
AS
BEGIN
	DECLARE @Role nvarchar(50)
	IF EXISTS(SELECT UserID FROM dbo.[Authentication] WHERE TokenID = @TokenID)
	BEGIN
		SET @Role = (SELECT [Role] FROM dbo.[Authentication] WHERE TokenID = @TokenID)
		IF(@Role = 'Student')
		BEGIN
			-- Query results by joining Student table
			SELECT TokenID, [Role], Expires, StudentID AS RoleID, [Exp], [Availability], FirstName, LastName
			FROM dbo.[Authentication] AS auth
			JOIN dbo.[Student] AS st ON auth.UserID = st.UserID
			JOIN dbo.[User] AS u ON u.UserID = st.UserID
			WHERE TokenID = @TokenID
		END
		ELSE
		BEGIN
			-- Query results by joining Mentor table
			SELECT TokenID, [Role], Expires, MentorID AS RoleID, JobTitle, [Availability], FirstName, LastName
			FROM dbo.[Authentication] AS auth
			JOIN dbo.[Mentor] AS mt ON auth.UserID = mt.UserID
			JOIN dbo.[User] AS u ON u.UserID = mt.UserID
			WHERE TokenID = @TokenID
		END
	END
END
