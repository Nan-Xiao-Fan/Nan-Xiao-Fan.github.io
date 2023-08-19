.PHONY: all clean s b d v

all: d

clean: 
	-rm -rf site/

s:
	( sleep 2; open http://127.0.0.1:8000 > /dev/null 2>& 1) &
	mkdocs serve

b:
	mkdocs build

d:
	mkdocs gh-deploy --force
v:
	open http://nanxiaofan.top > /dev/null 2>&1