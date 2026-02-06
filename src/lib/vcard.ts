interface VCardData {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone?: string;
  org?: string;
}

export const generateVCard = (data: VCardData): string => {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${data.lastName};${data.firstName};;;`,
    `FN:${data.firstName} ${data.lastName}`,
    `ORG:${data.org || "Høiden MC-Senter AS"}`,
    `TITLE:${data.role}`,
    `EMAIL;TYPE=WORK:${data.email}`,
  ];
  if (data.phone) {
    lines.push(`TEL;TYPE=WORK:${data.phone}`);
  }
  lines.push(
    "ADR;TYPE=WORK:;;Ryggeveien 121;Dilling;;1570;Norge",
    "END:VCARD"
  );
  return lines.join("\r\n");
};

export const downloadVCard = (data: VCardData) => {
  const vcf = generateVCard(data);
  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.firstName}_${data.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
