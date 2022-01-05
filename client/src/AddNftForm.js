import React, {useState} from 'react'

function AddNftForm({ handleAddNft, user }) {
  
  const initialState = {
    name: "",
    owner: "",
    price: "",
    photo: "",
    properties1: "",
    properties2: "",
    properties3: "",
    rarity_rank: "",
    rarity_score: "", 
  };

  const [formData, setFormData] = useState(initialState);

  async function handleErrors(r) {
    if (!r.ok) {
      const jsonResponse = await r.json();
      return alert(jsonResponse.errors)

    }

    return r;
  }

  function handleChange(e) {
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/nfts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name: formData.name, owner: formData.owner, price: formData.price, photo: formData.photo,   properties1: formData.properties1,   properties2: formData.properties2, properties3: formData.properties3, rarity_rank: formData.rarity_rank, rarity_score: formData.rarity_score, user_id: user.id
      })
    }).then(console.log("ddddddd"))
      .then(handleErrors)
      .then((newNft) => {
        setFormData(initialState);
        handleAddNft(newNft);
      })
      .catch(errors => console.log("errors", errors))
  }

  return (
    <div>
      <div className="sign-up-form">
        <h1>Add New Nft <br /><span id="fill-out-form">Please fill this form to add new nft</span></h1>
        <form onSubmit={handleSubmit} >
          <input className="input-box" placeholder="Name" name="name" onChange={handleChange} value={formData.name} />
          <input className="input-box" placeholder="Owner" name="owner" onChange={handleChange} value={formData.owner} />
          <input className="input-box" placeholder="Price" name="price" onChange={handleChange} value={formData.price} />
          <input className="input-box" placeholder="Nft URL" name="photo" onChange={handleChange} value={formData.photo} />
          <input className="input-box" placeholder="Properties1" name="properties1" onChange={handleChange} value={formData.properties1} />
          <input className="input-box" placeholder="Properties2" name="properties2" onChange={handleChange} value={formData.properties2} />
          <input className="input-box" placeholder="Properties3" name="properties3" onChange={handleChange} value={formData.properties3} />
          <input className="input-box" placeholder="Rarity Rank" name="rarity_rank" onChange={handleChange} value={formData.rarity_rank} />
          <input className="input-box" placeholder="Rarity score" name="rarity_score" onChange={handleChange} value={formData.rarity_score} />

          <button type="submit" className="sign-btn">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default AddNftForm



