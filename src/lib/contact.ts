export const CONTACT_EMAIL = "hello@sayyidishaarani.com";

const inspectionScopeSubject = "Web Application Inspection — Scope Inquiry";
const inspectionScopeBody = `Hello Sayyidi,

I would like to discuss an inspection scope.

- Target URL (or environment):
- Short application description:
- Preferred testing window:
- Point of contact who can authorize scope:

Regards,
`;

export const inspectionScopeMailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  inspectionScopeSubject
)}&body=${encodeURIComponent(inspectionScopeBody)}`;
