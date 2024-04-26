CREATE PROCEDURE [dbo].[GetStudentQuests]
    @StudentID UNIQUEIDENTIFIER
    AS
    BEGIN
        SET NOCOUNT ON;

        SELECT
            StudentID,
            sq.QuestID,
            ModuleID,
            [Name],
            [Description],
            ExpGain,
            Available,
            Completed,
            LastActivityDate
        FROM
            StudentQuests AS sq
        INNER JOIN dbo.Quest AS q ON q.QuestID = sq.QuestID
        INNER JOIN dbo.PostQuest AS pq ON pq.QuestID = sq.QuestID
        WHERE
            StudentID = @StudentID

        SELECT 
            q.QuestID,
            ModuleID,
            [Name],
            [Description],
            ExpGain,
            Available
        FROM 
            dbo.Quest AS q
        JOIN dbo.PostQuest AS pq ON pq.QuestID = q.QuestID
    END
    GO