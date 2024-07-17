const { httpGet, httpPost, httpPut, httpDelete } = require('./http');
const { encryptString } = require('./utils');

const appEndpoint = "https://app.mologtech.com/rest";

class AR {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async create(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/ar/ar", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class ASN {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async create(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/asn/asn", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class BASE {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async create(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/base/customize", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async update(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/base/customize", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async renameType(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/base/customize-type", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class Picked {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async selectByJob(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/picked/by_job", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class Shipped {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async selectByJob(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/shipped/by_job", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class DSO {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async create(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/dso/dso", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async updateConsigneeShipTo(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/dso/con_st", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async updateInvoice(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/dso/invoice", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async cancel(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/dso/cancel", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class GR {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async selectByJob(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/gr/by_job", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class GRR {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async selectByJob(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/grr/by_job", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class Inventory {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async select(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/inventory/list", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class InventoryMovement {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async selectByJob(params) {
        return await httpGet(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/inventorymovement/by_job", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class Partner {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async createUpdate(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/partner/partner", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class SKU {

    constructor(mologOpenApiClient) {
        this.mologOpenApiClient = mologOpenApiClient;
    }

    async createUpdate(params) {
        return await httpPost(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/sku/sku", 
            params,
            this.mologOpenApiClient.accessToken);
    }

    async updateBOM(params) {
        return await httpPut(this.mologOpenApiClient.appKey, 
            this.mologOpenApiClient.appSecretKey, 
            this.mologOpenApiClient.endpoint, 
            "/sku/skubom", 
            params,
            this.mologOpenApiClient.accessToken);
    }

}

class MologOpenApiClient {

    constructor(appKey, appSecretKey) {
        this.appKey = appKey;
        this.appSecretKey = appSecretKey;
        this.endpoint = appEndpoint;

        this.accessToken = null;
        this.keyRefreshToken = null;

        this.AR = new AR(this);
        this.ASN = new ASN(this);
        this.BASE = new BASE(this);
        this.Picked = new Picked(this);
        this.Shipped = new Shipped(this);
        this.DSO = new DSO(this);
        this.GR = new GR(this);
        this.GRR = new GRR(this);
        this.Inventory = new Inventory(this);
        this.InventoryMovement = new InventoryMovement(this);
        this.Partner = new Partner(this);
        this.SKU = new SKU(this);
    }

    async createToken(username, password) {
        const resp = await httpPost(this.appKey, this.appSecretKey, this.endpoint, "/system/token", {
            "USERNAME": encryptString(this.appSecretKey, username),
            "PASSWORD": encryptString(this.appSecretKey, password),
        });
        this.accessToken = resp["ACCESS_TOKEN"];
        this.keyRefreshToken = resp["REFRESH_TOKEN"];
    }

    async refreshToken() {
        const resp = await httpPost(this.appKey, this.appSecretKey, this.endpoint, "/system/refresh_token", {
            "REFRESH_TOKEN": this.keyRefreshToken,
        });
        this.accessToken = resp["ACCESS_TOKEN"];
    }

    async deleteToken() {
        const resp = await httpDelete(this.appKey, this.appSecretKey, this.endpoint, "/system/token", {
        }, this.accessToken);
        this.accessToken = null;
        this.keyRefreshToken = null;
        return resp;
    }

}

exports.MologOpenApiClient = MologOpenApiClient;


