CREATE PROCEDURE [dbo].[GetStudentQuests]
    @StudentID UNIQUEIDENTIFIER
    AS
    BEGIN
        SET NOCOUNT ON;

        SELECT
            StudentID,
            QuestID,
            Completed,
            LastActivityDate
        FROM
            StudentQuests
        WHERE
            StudentID = @StudentID;
    END
    GO