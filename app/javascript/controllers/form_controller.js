import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  // コントローラーに紐づく要素（=フォーム）をsubmitするアクション
  submit() {
    // セットされているTimeoutをクリアする
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      console.log("requestSubmit")
      // submit()ではなくrequestSubmit()を使う
      // submit()だと直でフォームの内容をリクエストしてしまい、Turboがリクエストをインターセプトできない
      this.element.requestSubmit()
    }, 200)
  }
}
