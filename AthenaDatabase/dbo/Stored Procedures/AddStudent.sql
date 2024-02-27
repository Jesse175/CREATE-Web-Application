﻿CREATE PROCEDURE [dbo].[AddStudent]
	@UserID uniqueidentifier
AS
BEGIN
	DECLARE @StudentID uniqueidentifier = NEWID()
	INSERT INTO dbo.[Student] 
	(UserID, StudentID, [Exp], [Availability]) 
	VALUES(@UserID, @StudentID, 0, '')

	-- Now return the student we just inserted
	EXEC GetStudent @StudentID = @StudentID; 
END
