CREATE PROCEDURE [dbo].[CheckAuthentication]
	@TokenID uniqueidentifier
AS
BEGIN
	IF EXISTS(SELECT TokenID FROM dbo.[Authentication] WHERE TokenID = @TokenID)
	BEGIN
		DECLARE @ExpiryDate datetime = (SELECT Expires FROM dbo.[Authentication] WHERE TokenID = @TokenID)
		IF(GETDATE() > @ExpiryDate)
		BEGIN
			-- This means we're past the expiry date so authentication must be removed
			EXEC DeleteAuthentication @TokenID

			-- Return false to indicate they are not authenticated and should be logged out
			SELECT 0 AS Result
		END
		ELSE
		BEGIN
			-- Return true to indicate they are authenticated
			SELECT 1 AS Result
		END
	END
	ELSE
	BEGIN
		-- Their token could not be found so they are not authenticated and should be logged out
		SELECT 0 AS Result
	END
END
