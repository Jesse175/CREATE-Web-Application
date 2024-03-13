CREATE PROCEDURE [dbo].[GetStudents]
AS
BEGIN
	SELECT StudentID, [Exp], [Availability], FirstName, LastName, Email
	FROM dbo.[Student] AS st
	JOIN dbo.[User] AS u ON u.UserID = st.UserID
	ORDER BY LastName
END