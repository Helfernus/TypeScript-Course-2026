type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessFileData = FileData & Status;
type AccessDatabaseData = DatabaseData & Status;

// Same with Interface instead of Type
interface FileDataa {
  path: string;
  content: string;
};

interface DatabaseDataa {
  connectionUrl: string;
  credentials: string;
};

interface Statusa {
  isOpen: boolean;
  errorMessage?: string;
};

interface AccessFileDataa extends FileDataa, Statusa {}
interface AccessDatabaseDataa extends DatabaseDataa, Statusa {}
