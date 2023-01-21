import React from "react";

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBank: ''
    };
    this.handleBankChange = this.handleBankChange.bind(this);
  }

  handleBankChange(event) {
    this.setState({ selectedBank: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          <select className="pilihbang" value={this.state.selectedBank} onChange={this.handleBankChange}>
            <option value="">Pilih Pembayaran</option>
            <option value="bca">Bank Syariah Indonesia (BSI)</option>
            <option value="bni">Bank Negara Indonesia (BNI)</option>
            <option value="bri">Bank Rakyat Indonesia (BRI)</option>
            <option value="bri">Bank Tabungan Negara (BTN)</option>
            <option value="bri">Bank Central Asia (BCA)</option>
            <option value="mandiri">Bank Mandiri</option>
            <option value="mandiri">Bank Mega</option>
          </select>
        </label>
      </form>
    );
  }
}

export default PaymentForm;
