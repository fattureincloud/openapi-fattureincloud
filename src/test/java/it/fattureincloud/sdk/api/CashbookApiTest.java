/*
 * Fatture in Cloud API v2 - API Reference
 * Connect your software with Fatture in Cloud, the invoicing platform chosen by more than 400.000 businesses in Italy.   The Fatture in Cloud API is based on REST, and makes possible to interact with the user related data prior authorization via OAuth2 protocol.
 *
 * The version of the OpenAPI document: 2.0.14
 * Contact: info@fattureincloud.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package it.fattureincloud.sdk.api;

import it.fattureincloud.sdk.ApiException;
import it.fattureincloud.sdk.model.CreateCashbookEntryRequest;
import it.fattureincloud.sdk.model.CreateCashbookEntryResponse;
import it.fattureincloud.sdk.model.GetCashbookEntryResponse;
import it.fattureincloud.sdk.model.ListCashbookEntriesResponse;
import it.fattureincloud.sdk.model.ModifyCashbookEntryRequest;
import it.fattureincloud.sdk.model.ModifyCashbookEntryResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for CashbookApi
 */
@Ignore
public class CashbookApiTest {

    private final CashbookApi api = new CashbookApi();

    
    /**
     * Create Cashbook Entry
     *
     * Creates a new cashbook entry.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createCashbookEntryTest() throws ApiException {
        Integer companyId = null;
        CreateCashbookEntryRequest createCashbookEntryRequest = null;
                CreateCashbookEntryResponse response = api.createCashbookEntry(companyId, createCashbookEntryRequest);
        // TODO: test validations
    }
    
    /**
     * Delete Cashbook Entry
     *
     * Deletes the specified cashbook entry.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteCashbookEntryTest() throws ApiException {
        Integer companyId = null;
        Integer documentId = null;
                api.deleteCashbookEntry(companyId, documentId);
        // TODO: test validations
    }
    
    /**
     * Get Cashbook Entry
     *
     * Gets the specified cashbook entry.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCashbookEntryTest() throws ApiException {
        Integer companyId = null;
        Integer documentId = null;
        String fields = null;
        String fieldset = null;
                GetCashbookEntryResponse response = api.getCashbookEntry(companyId, documentId, fields, fieldset);
        // TODO: test validations
    }
    
    /**
     * List Cashbook Entries
     *
     * Lists the cashbook entries.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listCashbookEntriesTest() throws ApiException {
        Integer companyId = null;
        String dateFrom = null;
        String dateTo = null;
        Integer year = null;
        String type = null;
        Integer paymentAccountId = null;
                ListCashbookEntriesResponse response = api.listCashbookEntries(companyId, dateFrom, dateTo, year, type, paymentAccountId);
        // TODO: test validations
    }
    
    /**
     * Modify Cashbook Entry
     *
     * Modifies the specified cashbook entry.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void modifyCashbookEntryTest() throws ApiException {
        Integer companyId = null;
        Integer documentId = null;
        ModifyCashbookEntryRequest modifyCashbookEntryRequest = null;
                ModifyCashbookEntryResponse response = api.modifyCashbookEntry(companyId, documentId, modifyCashbookEntryRequest);
        // TODO: test validations
    }
    
}
