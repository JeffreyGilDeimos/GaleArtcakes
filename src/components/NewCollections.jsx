import React from "react";
import { cakeList } from "../utilities/enums";

export default function NewCollections() {
  const renderCakeList = () => {
    return cakeList.map((item) => (
      <div
        class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center"
        key={item.id}
      >
        <div class="card-img overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            class="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section id="varities" class="bg-danger bg-opacity-10">
        <div class="text-center py-5">
          <h4>
            <i class="bi bi-check-square me-2"></i>NEW COLLECTIONS
          </h4>
        </div>
        <div class="container pb-5">
          <div class="row">{renderCakeList()}</div>
        </div>
      </section>
    </div>
  );
}
