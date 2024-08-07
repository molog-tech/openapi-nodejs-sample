# Nodejs wrapper for Molog WMS Open API

This is NodeJS sample for Molog WMS Open API

# Usage

1. Require `MologOpenAPI` class

   ```js
   const { MologOpenApiClient } = require("./lib");
   ```

2. Instantiate a MologOpenApiClient Object

   ```js
   const mologOpenApiClient = new MologOpenApiClient(appKey, appSecretKey);

   // Create Token API
   await mologOpenApiClient.createToken(username, password);

   // If Access Token is expired, you can use refresh token
   await mologOpenApiClient.refreshToken();
   ```

3. Create token for set access token

   ```js
   // Create Token API
   await mologOpenApiClient.createToken(username, password);

   // If Access Token is expired, you can use refresh token
   await mologOpenApiClient.refreshToken();
   ```

4. Call API action with proper parameters

   ```js
   await mologOpenApiClient.Inventory.select({
     PAGE: 1,
     SIZE: 10,
   });
   ```

5. For available API actions, check the [offcial documentation](https://app.mologtech.com/open-api-doc-th/)

# API Support

| Advance Return | Status             |
| -------------- | ------------------ |
| Create AR Job  | :heavy_check_mark: |

---

| Advance Shipment Notice | Status             |
| ----------------------- | ------------------ |
| Create ASN Job          | :heavy_check_mark: |

---

| Base                                  | Status             |
| ------------------------------------- | ------------------ |
| Create or Update value Base Customize | :heavy_check_mark: |
| Update Base Customize                 | :heavy_check_mark: |
| Rename Base Customize                 | :heavy_check_mark: |

---

| Confirm Picked               | Status             |
| ---------------------------- | ------------------ |
| Select Confirm Picked by Job | :heavy_check_mark: |

---

| Confirm Shipped               | Status             |
| ----------------------------- | ------------------ |
| Select Confirm Shipped by Job | :heavy_check_mark: |

---

| Direct Shipment Order       | Status             |
| --------------------------- | ------------------ |
| Create DSO Job              | :heavy_check_mark: |
| Update Consignee and ShipTo | :heavy_check_mark: |
| Update Invoice              | :heavy_check_mark: |
| Cancel DSO                  | :heavy_check_mark: |

---

| Goods Receive                | Status             |
| ---------------------------- | ------------------ |
| Select Goods Receive ฺby Job | :heavy_check_mark: |

---

| Goods Receive Return                | Status             |
| ----------------------------------- | ------------------ |
| Select Goods Receive Return ฺby Job | :heavy_check_mark: |

---

| Inventory             | Status             |
| --------------------- | ------------------ |
| Select inventory list | :heavy_check_mark: |

---

| Inventory Movement               | Status             |
| -------------------------------- | ------------------ |
| Select inventory movement by Job | :heavy_check_mark: |

---

| Partner                  | Status             |
| ------------------------ | ------------------ |
| Create or Update Partner | :heavy_check_mark: |

---

| SKU                  | Status             |
| -------------------- | ------------------ |
| Create or Update SKU | :heavy_check_mark: |
| Update SKU Bom       | :heavy_check_mark: |

---

| System        | Status             |
| ------------- | ------------------ |
| Create token  | :heavy_check_mark: |
| Delete Token  | :heavy_check_mark: |
| Refresh token | :heavy_check_mark: |

---

# Development

## Tools

- node - runtime
- eslint - linter
- vscode - recommended text editor

# Reference

## MOLOG - OPEN API Offcial Documentation

https://app.mologtech.com/open-api-doc-th/
