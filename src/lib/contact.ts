export const CONTACT_EMAIL = "salam@sayyidishaarani.com";

const inspectionScopeSubject = "Inspection Scope Review — [Organization Name]";
const inspectionScopeBody = [
  "I am requesting a structured inspection scope review.",
  "",
  "I confirm that I am authorized to request scope on behalf of the system owner.",
  "",
  "Target system URL(s) and environment (production / staging):",
  "",
  "Brief description of the application and its purpose:",
  "",
  "Preferred testing window:",
  "",
  "Authorized contact (name, role, and email):",
  "",
  "This request is submitted for the purpose of defining scope and authorization prior to any assessment activity.",
].join("\r\n");

export const inspectionScopeMailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  inspectionScopeSubject
)}&body=${encodeURIComponent(inspectionScopeBody)}`;
