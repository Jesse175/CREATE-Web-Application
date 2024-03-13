CREATE PROCEDURE [dbo].[GetStudent]
	@StudentID uniqueidentifier
AS
BEGIN
	SELECT StudentID, [Exp], [Availability], FirstName, LastName, Email
	FROM dbo.[Student] AS st
	JOIN dbo.[User] AS u ON u.UserID = st.UserID
	WHERE StudentID = @StudentID
	ORDER BY LastName
END