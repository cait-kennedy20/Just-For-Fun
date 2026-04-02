<section id="inventory-api" class="page-section">
  <div class="section-card">
    <div class="eyebrow">Open API Demo</div>
    <h2>Inventory API</h2>
    <p class="section-copy">
      Create a new inventory item using our Open API. This demo shows how a partner
      or customer-facing workflow could submit inventory directly into the platform.
    </p>

    <form id="inventory-form" class="api-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="item-name">Name</label>
          <input id="item-name" name="name" type="text" placeholder="Item-Kits" required />
        </div>

        <div class="form-group">
          <label for="item-cost">Cost</label>
          <input id="item-cost" name="cost" type="number" step="0.01" placeholder="10" required />
        </div>

        <div class="form-group">
          <label for="item-rate">Rate</label>
          <input id="item-rate" name="rate" type="number" step="0.01" placeholder="25" required />
        </div>

        <div class="form-group">
          <label for="item-category">Category</label>
          <input id="item-category" name="category" type="text" placeholder="Air Cooler:Air cleaner" />
        </div>

        <div class="form-group form-group-full">
          <label for="item-description">Description</label>
          <textarea id="item-description" name="description" rows="4" placeholder="Test inventory item"></textarea>
        </div>

        <div class="form-group form-group-full">
          <label for="item-category-id">Category ID (optional)</label>
          <input id="item-category-id" name="categoryId" type="text" placeholder="9ef0cfca-85dc-4c49-8d15-364e96a917c1" />
        </div>

        <div class="form-group form-group-full">
          <label for="item-external-id">External ID (optional)</label>
          <input id="item-external-id" name="externalId" type="text" placeholder="external-123" />
        </div>

        <div class="form-group form-group-full">
          <label for="item-image">Image URL (optional)</label>
          <input id="item-image" name="image" type="text" placeholder="https://example.com/image.png" />
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" id="inventory-submit-btn">Create Inventory Item</button>
      </div>
    </form>

    <div id="inventory-status" class="api-status" aria-live="polite"></div>

    <div class="response-block">
      <div class="response-header">API Response</div>
      <pre id="inventory-response">No request submitted yet.</pre>
    </div>
  </div>
</section>
