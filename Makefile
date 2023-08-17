.PHONY: all clean s b d

all: d

clean: 
	-rm -rf site/

s:
	mkdocs serve

b:
	mkdocs build

d:
	mkdocs gh-deploy --force
