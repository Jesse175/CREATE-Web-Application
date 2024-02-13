CREATE TABLE [dbo].[user] (
    [ID]        UNIQUEIDENTIFIER         NOT NULL,
    [firstName] NCHAR (100) NOT NULL,
    [lastName]  NCHAR (100) NOT NULL,
    [email]     NCHAR (100) NOT NULL,
    [password]  NCHAR (100) NOT NULL,
    CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED ([ID] ASC)
);

