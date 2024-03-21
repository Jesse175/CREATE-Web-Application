CREATE PROCEDURE [dbo].[GetMentorStudents]
	@MentorID UNIQUEIDENTIFIER
AS
BEGIN
	SELECT st.StudentID, [Exp], [Availability], FirstName, LastName, Email
	FROM dbo.[Student] AS st
	JOIN dbo.[User] AS u ON u.UserID = st.UserID
	JOIN dbo.[StudentMentor] AS sm ON sm.MentorID = @MentorID
	ORDER BY LastName
END