// Interface for Interns
interface Intern {
  name: string;
  age: number;
  skills: string[];
}

// Interface for Juniors
interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: Date;
  domain: Domain;
}

// Enum for domain values
declare enum Domain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

// Interface for Company
interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}

// Export the Company interface
export { Company };
