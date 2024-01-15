// vite.config.js
import { resolve } from "node:path";
import { defineConfig } from "file:///C:/Users/user/likelion-8/jandi-market/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\likelion-8\\jandi-market";
var vite_config_default = defineConfig({
  build: {
    target: "esnext",
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        cart: resolve(__vite_injected_original_dirname, "src/pages/cart/index.html"),
        login: resolve(__vite_injected_original_dirname, "src/pages/login/index.html"),
        register: resolve(__vite_injected_original_dirname, "src/pages/register/index.html"),
        footer: resolve(__vite_injected_original_dirname, "src/components/footer/footer.html"),
        Header: resolve(__vite_injected_original_dirname, "src/components/header/header.html"),
        productList: resolve(__vite_injected_original_dirname, "src/pages/productList/index.html"),
        productDetail: resolve(__vite_injected_original_dirname, "src/pages/productDetail/index.html"),
        addCart: resolve(__vite_injected_original_dirname, "src/components/addCart/addCart.html"),
        detailModal: resolve(
          __vite_injected_original_dirname,
          "src/components/detailModal/detailModal.html"
        ),
        headerCategory: resolve(
          __vite_injected_original_dirname,
          "src/components/header/headerCategory.html"
        ),
        modal: resolve(__vite_injected_original_dirname, "src/components/modal/modal.html"),
        bubble: resolve(__vite_injected_original_dirname, "src/components/bubble/index.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXGxpa2VsaW9uLThcXFxcamFuZGktbWFya2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXGxpa2VsaW9uLThcXFxcamFuZGktbWFya2V0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL2xpa2VsaW9uLTgvamFuZGktbWFya2V0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcclxuICAgIG91dERpcjogJ2RvY3MnLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGNhcnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL2NhcnQvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGxvZ2luOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9sb2dpbi9pbmRleC5odG1sJyksXHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL3JlZ2lzdGVyL2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBmb290ZXI6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5odG1sJyksXHJcbiAgICAgICAgSGVhZGVyOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuaHRtbCcpLFxyXG4gICAgICAgIHByb2R1Y3RMaXN0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9wcm9kdWN0TGlzdC9pbmRleC5odG1sJyksXHJcbiAgICAgICAgcHJvZHVjdERldGFpbDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvcHJvZHVjdERldGFpbC9pbmRleC5odG1sJyksXHJcbiAgICAgICAgYWRkQ2FydDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9hZGRDYXJ0L2FkZENhcnQuaHRtbCcpLFxyXG4gICAgICAgIGRldGFpbE1vZGFsOiByZXNvbHZlKFxyXG4gICAgICAgICAgX19kaXJuYW1lLFxyXG4gICAgICAgICAgJ3NyYy9jb21wb25lbnRzL2RldGFpbE1vZGFsL2RldGFpbE1vZGFsLmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBoZWFkZXJDYXRlZ29yeTogcmVzb2x2ZShcclxuICAgICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAgICdzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyQ2F0ZWdvcnkuaHRtbCdcclxuICAgICAgICApLFxyXG4gICAgICAgIG1vZGFsOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmh0bWwnKSxcclxuICAgICAgICBidWJibGU6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvYnViYmxlL2luZGV4Lmh0bWwnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsU0FBUyxlQUFlO0FBQ25VLFNBQVMsb0JBQW9CO0FBRDdCLElBQU0sbUNBQW1DO0FBR3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDckMsTUFBTSxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLFFBQ3BELE9BQU8sUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxRQUN0RCxVQUFVLFFBQVEsa0NBQVcsK0JBQStCO0FBQUEsUUFDNUQsUUFBUSxRQUFRLGtDQUFXLG1DQUFtQztBQUFBLFFBQzlELFFBQVEsUUFBUSxrQ0FBVyxtQ0FBbUM7QUFBQSxRQUM5RCxhQUFhLFFBQVEsa0NBQVcsa0NBQWtDO0FBQUEsUUFDbEUsZUFBZSxRQUFRLGtDQUFXLG9DQUFvQztBQUFBLFFBQ3RFLFNBQVMsUUFBUSxrQ0FBVyxxQ0FBcUM7QUFBQSxRQUNqRSxhQUFhO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU8sUUFBUSxrQ0FBVyxpQ0FBaUM7QUFBQSxRQUMzRCxRQUFRLFFBQVEsa0NBQVcsa0NBQWtDO0FBQUEsTUFDL0Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
