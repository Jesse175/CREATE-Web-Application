CREATE PROCEDURE [dbo].[AddUpdateStudentQuest]
    @StudentID uniqueidentifier,
    @QuestID uniqueidentifier,
    @Completed bit,
    @LastActivityDate datetime
AS
BEGIN
    -- Declare a table variable to capture the output of the MERGE statement
    DECLARE @OutputTable TABLE (Completed bit);

    MERGE INTO StudentQuests AS target
    USING (SELECT @StudentID AS StudentID, @QuestID AS QuestID, @Completed AS Completed, @LastActivityDate AS LastActivityDate) AS source
    ON (target.StudentID = source.StudentID AND target.QuestID = source.QuestID)
    WHEN MATCHED THEN
        UPDATE SET
            target.Completed = source.Completed,
            target.LastActivityDate = source.LastActivityDate
    WHEN NOT MATCHED BY TARGET THEN
        INSERT (StudentID, QuestID, Completed, LastActivityDate)
        VALUES (source.StudentID, source.QuestID, source.Completed, source.LastActivityDate)
    OUTPUT INSERTED.Completed INTO @OutputTable;

    -- Now declare a scalar variable to hold the result
    DECLARE @Result bit;

    -- Retrieve the result from the table variable
    SELECT TOP 1 @Result = Completed FROM @OutputTable;

    -- Return the result
    RETURN @Result;
END