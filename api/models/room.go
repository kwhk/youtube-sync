package models

type Room interface {
	GetID() string
	GetName() string
	GetPrivate() bool
}

type RoomRepository interface {
	AddRoom(room Room)
	DeleteRoom(room Room)
	FindRoomByName(name string) Room
	FindRoomByID(id string) Room
	GetAllRooms() []Room
}