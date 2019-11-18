json.extract! user, :id, :username, :name, :email
json.photoUrl url_for(user.photo)