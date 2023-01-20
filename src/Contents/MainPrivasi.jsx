import React from 'react'

function MainPrivasi() {
  return (
    <>
        <div className='cardprivasi'>
            <h2 className='textprivasi'>Privasi</h2>
            <div className="posisioldpw">
                <p className="fontstyledataprofil">Password Lama</p>
                <input className="input-profil" type="password" />
            </div>
            <div className="posisinewpw">
                <p className="fontstyledataprofil">Password Baru</p>
                <input className="input-profil" type="password" />
            </div>
            <div className="posisiconfpw">
                <p className="fontstyledataprofil">Konfirmasi Password Baru</p>
                <input className="input-profil" type="password" />
            </div>
            <button className="btn-save-privasi" type="submit">Simpan</button>
        </div>
    </>
  )
}

export default MainPrivasi