

const { MologOpenApiClient } = require('./lib')

const appKey = "0000000000000000";
const appSecretKey = "TESTaytGjOqduSZnZDymxhPWgezyiMYr";

const username = "user1";
const password = "ft@user@pass123";

async function main() {
  try {
    const client = new MologOpenApiClient(appKey, appSecretKey);

    // Create Token API
    await client.createToken(username, password);

    // If Access Token is expired, you can use refresh token
    await client.refreshToken();

    /*

    // Example Advance Return
    const createAR = await client.AR.create({
      "Rec1 No": "RET0000000001",
      "EXP_RECEIVED_DATE": "2021-03-23T00:00:00+07:00",
      "DETAIL": [
        {
          "SKU_CODE": "PILLOWB001",
          "RECEIVED_QTY": "10"
        }
      ]
    });


    // Example Advance Shipment Notice
    const createASN = await client.ASN.create({
      "Rec1 No": "REC0000000001",
      "EXP_RECEIVED_DATE": "2021-03-23T00:00:00+07:00",
      "DETAIL": [
        {
          "SKU_CODE": "PILLOWB001",
          "RECEIVED_QTY": "10"
        }
      ]
    });

    // Example Base
    const createBase = await client.BASE.create({
      "DATA": [
        {
          "BASE_TYPE": "COLORS",
          "BASE_KEY": "RED",
          "BASE_VALUE": "Red"
        }
      ]
    });

    const updateBase = await client.BASE.update({
      {
        "BASE_TYPE": "COLORS",
        "FROM_BASE_KEY": "RED",
        "FROM_BASE_VALUE": "Red",
        "TO_BASE_KEY": "BLUE",
        "TO_BASE_VALUE": "Blue"
      }
    });

    const renameBaseType = await client.BASE.renameType({
      {
        "FROM_BASE_TYPE": "COLOR",
        "TO_BASE_TYPE": "COLORS"
      }
    });


    // Example Confirm Picked
    const pickByJob = await client.Picked.selectByJob({
      "Rel1 No": "QQ",
    });


    // Example Confirm Shipped
    const shipByJob = await client.Shipped.selectByJob({
      "Rel1 No": "QQ",
    });


    // Example Direct Shipment Order
    const createDSO = await client.DSO.create({
      "Rel1 No": "REC0000000002",
      "PSO_DATE": "2021-03-23T00:00:00+07:00",
      "DETAIL": [
        {
          "SKU_CODE": "PILLOWB001",
          "RELEASE_QTY": "10"
        }
      ]
    });

    const updateConsigneeShipToDSO = await client.DSO.updateConsigneeShipTo({
      "Rel1 No": "REC0000000002",
      "CON_CODE": "ITH5",
    });

    const updateInvoiceDSO = await client.DSO.updateInvoice({
      "Rel1 No": "REC0000000002",
      "INVOICE_NO": "INV0000000001",
    });

    const cancelDSO = await client.DSO.cancel({
      "Rel1 No": "REC0000000002",
    });


    // Example Goods Receive
    const grByJob = await client.GR.selectByJob({
      "Rec1 No": "QQ",
    });


    // Example Goods Receive Return
    const grrByJob = await client.GRR.selectByJob({
      "Rec1 No": "RT",
    });


    // Example Inventory
    const inventoryList = await client.Inventory.select({
      "PAGE": 1,
      "SIZE": 10,
      "RECEIVED_DATE_FROM": "2021-03-23T00:00:00+07:00",
      "RECEIVED_DATE_TO": "2021-03-23T23:59:59+07:00",
      // "SKU_CODE": "PILLOWB001":
      // "ON_HAND_ONLY": "true":
    });


    // Example Inventory Movement
    const invMovemenByJob = await client.InventoryMovement.selectByJob({
      "MOVEMENT_ID": 72,
      "TYPE": "HLD"
    });


    // Example Partner
    const createPartner = await client.Partner.createUpdate({
      "DATA": [
        {
          "ACTIVE": true,
          "CODE": "ITH5",
          "COMPANY_NAME": "AAA"
        }
      ]
    });


    // Example SKU
    const createSKU = await client.SKU.createUpdate({
      "DATA": [
        {
          "SKU_CODE": "ABC0001",
          "ACTIVE": true,
          "STORAGE_TYPE": "AMBIENT",
          "STORAGE_CAT_SERVICE": "GENERAL",
          "PRODUCT_TYPE": "NORMAL",
          "PICK_BY_CODE": "FIFO",
          "CBM_RATIO": "1",
          "BOM_SKU": false,
          "DEFAULT_EXPIRY": false,
          "DIMENSION": [
            {
              "SKU_LEVEL": "1",
              "PACK_CODE": "PCS",
              "PACK_QTY": "3",
              "DEF_PACK": true,
              "LENGTH": "1.5",
              "WIDTH": "1.5",
              "HEIGHT": "1",
              "LENGTH_UOM": "CM",
              "VOLUME": "1",
              "VOLUME_UOM": "CBM",
              "NET_WEIGHT": "1",
              "GROSS_WEIGHT": "1",
              "WEIGHT_UOM": "KG",
            }
          ]
        }
      ]
    });

    const updateBOM = await client.SKU.updateBOM({
      "DATA": [
        {
          "SKU_CODE": "ABC0001",
          "CHILDREN": [
            {
              "CHILD_SKU_CODE": "PILLOWB001",
              "QTY": "2",
            }
          ]
        }
      ]
    });
    */

    // If you want sign out on Open API
    await client.deleteToken();
  } catch (error) {
    console.log(error.ERROR_CODE, error.ERROR_MESSAGE)
  }
}

main();