﻿CREATE PROCEDURE [dbo].[GetMentorStudents]
	@MentorID UNIQUEIDENTIFIER
AS
BEGIN
	SELECT st.StudentID, [Exp], [Availability], FirstName, LastName, Email
	FROM dbo.[StudentMentor] AS sm
	INNER JOIN dbo.[Student] AS st ON st.StudentID = sm.StudentID
	INNER JOIN dbo.[User] AS u ON u.UserID = st.UserID
	WHERE MentorID = @MentorID
	ORDER BY LastName
END