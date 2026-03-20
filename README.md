# FieldEdge Developer Portal (API Demo)

This is a concept for a developer portal that supports two distinct audiences:

- **Customers** → quick, self-serve API usage  
- **Partners** → structured integration onboarding  

---

## 🧭 Single Entry Point

### 🚀 For Customers
**Use the API for your business**

- No contract required  
- No sandbox required  
- Uses existing FieldEdge account  
- Quickstart in minutes  

👉 **CTA:** Get API Access  

---

### 🤝 For Partners
**Build an integration**

- Apply for access  
- Receive sandbox environment  
- Structured onboarding  
- Marketplace listing via Gobo  

👉 **CTA:** Apply as a Partner  

---

# 👤 Customer Experience

## 🔑 API Key Dashboard

Once a customer generates access, they land in a simple self-serve dashboard:

### API Keys

| Name            | Key                 | Status |
|-----------------|---------------------|--------|
| Production Key  | `fe_live_1234abcd`  | Active |
| Backup Key      | `fe_live_5678efgh`  | Active |

### Actions
- ➕ Generate new key  
- ❌ Revoke key  
- 📋 Copy key  

---

### Usage Guidance

- Keys are tied to your **existing FieldEdge account**
- All requests hit **production data**
- No sandbox required  

👉 Recommended first step:  
**Send your first lead using the Leads API**

---

### Quickstart Example

```bash
curl -X POST https://api.fieldedge.com/leads \
  -H "Authorization: Bearer fe_live_1234abcd" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "555-123-4567"
  }'
