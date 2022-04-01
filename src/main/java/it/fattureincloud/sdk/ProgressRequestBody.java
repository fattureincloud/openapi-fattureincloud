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

package it.fattureincloud.sdk;

import java.io.IOException;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
import okio.BufferedSink;
import okio.ForwardingSink;
import okio.Okio;
import okio.Sink;

public class ProgressRequestBody extends RequestBody {

  private final RequestBody requestBody;

  private final ApiCallback callback;

  public ProgressRequestBody(RequestBody requestBody, ApiCallback callback) {
    this.requestBody = requestBody;
    this.callback = callback;
  }

  @Override
  public MediaType contentType() {
    return requestBody.contentType();
  }

  @Override
  public long contentLength() throws IOException {
    return requestBody.contentLength();
  }

  @Override
  public void writeTo(BufferedSink sink) throws IOException {
    BufferedSink bufferedSink = Okio.buffer(sink(sink));
    requestBody.writeTo(bufferedSink);
    bufferedSink.flush();
  }

  private Sink sink(Sink sink) {
    return new ForwardingSink(sink) {

      long bytesWritten = 0L;
      long contentLength = 0L;

      @Override
      public void write(Buffer source, long byteCount) throws IOException {
        super.write(source, byteCount);
        if (contentLength == 0) {
          contentLength = contentLength();
        }

        bytesWritten += byteCount;
        callback.onUploadProgress(bytesWritten, contentLength, bytesWritten == contentLength);
      }
    };
  }
}
